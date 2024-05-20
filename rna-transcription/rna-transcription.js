// @ts-check

/**
 * The `RNA_COMPLEMENTS` constant is an object that maps
 * DNA nucleotides to their corresponding RNA complements.
 */
const RNA_COMPLEMENTS = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

/**
 * Helper function to transcribe one nucleotide to RNA.
 * @param {string} oneNucleotide The nucleotide to transcribe to RNA.
 * @returns {string}
 */
const transcribeOne = (oneNucleotide) => {
  if (!RNA_COMPLEMENTS.hasOwnProperty(oneNucleotide)) {
    throw new Error('Invalid DNA nucleotide.');
  }

  return RNA_COMPLEMENTS[oneNucleotide];
};

/**
 * The function `toRna` determines the RNA complement
 * of a given DNA sequence.
 *
 * @param {string} dnaNucleotides the DNA nucleotides
 * to transcribe.
 * @returns {string}
 */
export const toRna = (dnaNucleotides) => {
  if (dnaNucleotides.trim().length === 0) return '';

  return dnaNucleotides
    .split('')
    .map((nucleotide) => transcribeOne(nucleotide))
    .join('');
};
