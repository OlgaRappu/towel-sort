
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [[]]) return [];
  if (matrix === undefined) return [];
  len = matrix.length;
 // alert(len);
  let mat = [];
  m = 0
  for(i=0;i<len;i++){
   // alert(matrix[i].length);
    len2 = matrix[i].length;
    for (k=0;k<len2;k++){
     if (i%2==0) mat[m] = matrix[i][k];
          else mat[m] = matrix[i][len2-k-1];
    m++;}
  }
 //npm test mat = mat.join(' ');
  return mat;
}