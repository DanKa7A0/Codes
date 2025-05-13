#include <stdio.h>
#include <math.h>

int main(int argc, char const *argv[]){
    int SIZE = 3;
    double matrix[3][3] = {{1.0000, 0.5000, 3.0000}, {2.0000, 1.0000, 4.0000}, {0.3000, 0.2500, 1.0000}};
    double result[3][3] = {};

    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            for (int k = 0; k < SIZE; k++) {
                result[i][j] += matrix[i][k] * matrix[k][j];
            }
            
        }
        
    }

    double sumMatrix = 0.0;
    for (int i = 0; i < SIZE; i++){
        double sumRow = 0.0;
        for (int j = 0; j < SIZE; j++){
            sumRow += matrix[j][i];
        }
        printf("%.4f\n", sumRow);
        sumMatrix += sumRow;
    }
    

    printf("%.4f\n", sumMatrix);
    // Print each array element's value
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            printf("%.4f ", result[i][j]);
        }
      	printf("\n");
    }
    return 0;
}
