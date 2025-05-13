#include <stdio.h>

#define ROW 3
#define COL 4 

int main(int argc, char const *argv[]){

    double arr[ROW][COL] = {
        {-3, -1,  2, -11},
        { 2,  1, -1, 8},
        {-2,  1,  2, -3}
    };

    // algoirithm
    for (size_t k = 0; k < ROW; k++){
        // divide k row by k element (make 1 the diagonal element)
        const double firstEl = arr[k][k];
            for (size_t j = 0; j < COL; j++){
                arr[k][j] = arr[k][j] / firstEl;
            }

        if (k+1 == ROW) break;

        // make 0 the elements below the diagonal element
        for (size_t i = k + 1; i < ROW; i++){
            const double el = arr[i][k];
            for (size_t j = 0; j < COL; j++){
                arr[i][j] = arr[i][j] - (arr[k][j] * el);
            }
        }
    }

    // print the result
    for (size_t i = 0; i < ROW; i++){
        for (size_t j = 0; j < COL; j++){
            printf("%.2f ", arr[i][j]);
        }
        printf("\n");
    }


    return 0;
}
