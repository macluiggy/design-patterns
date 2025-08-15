/**
 * Naive vs Flyweight memory usage comparison.
 *
 * Scenario: Represent a large text document as character objects.
 * Each logical character appears at a (line, column) with formatting attributes.
 * Many characters share the same formatting (font family, size, bold, italic, color).
 *
 * Naive approach: Every Character object stores BOTH the glyph (symbol) and all formatting attributes.
 * Flyweight approach: Character stores only extrinsic data (position + the symbol) and a reference
 * to a shared Formatting flyweight (intrinsic state) provided by a factory.
 *
 * Run tip (enable GC for more accurate numbers):
 *   npx ts-node --compiler-options '{"module":"commonjs"}' --expose-gc src/structural/flyweight/test.ts
 * or after compiling to JS:
 *   node --expose-gc dist/structural/flyweight/test.js
 */

// Minimal ambient declarations (in case @types/node isn't installed)
declare const global: any; // eslint-disable-line
declare const process: any; // eslint-disable-line

// --------------------------------------
// Helper: memory formatting
function mb(bytes: number): string {
	return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

function getHeap(): number {
	if (global && typeof (global as any).gc === 'function') {
		(global as any).gc(); // Force GC if available.
	}
	return process.memoryUsage().heapUsed;
}

// --------------------------------------
// Intrinsic formatting (to be shared in flyweight approach)
interface FormattingData {
	fontFamily: string;
	fontSize: number;
	bold: boolean;
	italic: boolean;
	color: string;
}

// Naive Character: keeps full formatting copy
class NaiveCharacter {
	constructor(
		public symbol: string,
		public line: number,
		public column: number,
		public fontFamily: string,
		public fontSize: number,
		public bold: boolean,
		public italic: boolean,
		public color: string
	) {}
}

// Flyweight Character: shares FormattingData
class FlyweightCharacter {
	constructor(
		public symbol: string,
		public line: number,
		public column: number,
		public formatting: FormattingData
	) {}
}

// Flyweight Factory caches formatting objects
class FormattingFlyweightFactory {
	private cache = new Map<string, FormattingData>();

	getFormatting(data: FormattingData): FormattingData {
		const key = this.keyOf(data);
		const existing = this.cache.get(key);
		if (existing) return existing;
		this.cache.set(key, data); // store the original reference (immutable usage expected)
		return data;
	}

	private keyOf(d: FormattingData): string {
		return `${d.fontFamily}|${d.fontSize}|${d.bold?'1':'0'}|${d.italic?'1':'0'}|${d.color}`;
	}

	stats() {
		return { totalFlyweights: this.cache.size };
	}
}

// --------------------------------------
// Data generation
interface ScenarioConfig {
	lines: number;         // number of lines
	columns: number;       // chars per line
	distinctFormatCombos: number; // how many unique formatting combos to cycle through
}

const config: ScenarioConfig = {
	lines: 2000,              // increase for heavier test
	columns: 120,             // typical terminal width
	distinctFormatCombos: 12, // repeated formatting patterns
};

// Pre-generate formatting combinations
function buildFormatCombos(n: number): FormattingData[] {
	const families = ['Arial', 'Verdana', 'Roboto', 'Courier', 'Times'];
	const colors = ['#111', '#333', '#555', '#777', '#990000', '#004488'];
	const combos: FormattingData[] = [];
	for (let i = 0; i < n; i++) {
		combos.push({
			fontFamily: families[i % families.length],
			fontSize: 12 + (i % 4) * 2,
			bold: i % 2 === 0,
			italic: i % 3 === 0,
			color: colors[i % colors.length],
		});
	}
	return combos;
}

const formatCombos = buildFormatCombos(config.distinctFormatCombos);

// Utility to create pseudo-random ASCII letters
function symbolAt(line: number, col: number): string {
	const code = 65 + ((line * 31 + col * 17) % 26); // A-Z pattern
	return String.fromCharCode(code);
}

// --------------------------------------
// Naive build
function buildNaive(cfg: ScenarioConfig): NaiveCharacter[] {
	const arr: NaiveCharacter[] = [];
	for (let l = 0; l < cfg.lines; l++) {
		for (let c = 0; c < cfg.columns; c++) {
			const fmt = formatCombos[(l * cfg.columns + c) % formatCombos.length];
			arr.push(
				new NaiveCharacter(
					symbolAt(l, c),
					l,
					c,
					fmt.fontFamily,
					fmt.fontSize,
						fmt.bold,
					fmt.italic,
					fmt.color
				)
			);
		}
	}
	return arr;
}

// Flyweight build
function buildFlyweight(cfg: ScenarioConfig, factory: FormattingFlyweightFactory): FlyweightCharacter[] {
	const arr: FlyweightCharacter[] = [];
	for (let l = 0; l < cfg.lines; l++) {
		for (let c = 0; c < cfg.columns; c++) {
			const fmt = formatCombos[(l * cfg.columns + c) % formatCombos.length];
			const sharedFmt = factory.getFormatting(fmt);
			arr.push(new FlyweightCharacter(symbolAt(l, c), l, c, sharedFmt));
		}
	}
	return arr;
}

// --------------------------------------
// Runner
function runComparison() {
	console.log('--- Flyweight Pattern Memory Comparison ---');
	console.log('Config:', config);

	// Naive
	let start = getHeap();
	const naive = buildNaive(config);
	let afterNaive = getHeap();
	console.log(`Naive characters: ${naive.length}`);
	console.log('Naive heap delta:', mb(afterNaive - start));

	// Release reference (hint to GC)
	(global as any).naiveHold = naive; // comment this line to allow GC; keep to compare both simultaneously

	// Flyweight
	const factory = new FormattingFlyweightFactory();
	start = getHeap();
	const fly = buildFlyweight(config, factory);
	let afterFly = getHeap();
	console.log(`Flyweight characters: ${fly.length}`);
	console.log('Flyweight heap delta:', mb(afterFly - start));
	console.log('Flyweight stats:', factory.stats());

	// Optional ratio (approximate)
	const naivePerChar = (afterNaive - (afterNaive - (afterNaive - start))) / naive.length; // simplified; may be noisy
	const flyPerChar = (afterFly - start) / fly.length;
	console.log('Approx per-char (flyweight build segment):', mb(flyPerChar));
	console.log('\nNOTE: Run with --expose-gc for more stable numbers.');
}

runComparison();

