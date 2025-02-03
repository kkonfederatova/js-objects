export default (dna) => {
  const dnaToRnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  let rna = '';
  for (let nucleotide of dna) {
        if (!dnaToRnaMap[nucleotide]) {
            return null;
        }
        rna += dnaToRnaMap[nucleotide];
    }

  return rna;
}
