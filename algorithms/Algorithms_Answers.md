Add your answers to the Algorithms exercises here.
a) a = 0;
while (a < n * n * n)
a = a + n * n;
# solution: O(N)

b) // input array is of length n
i = array.length - 1;
while (array[i] > x && i >= 0)
i = i/2;
# solution: log(N)

c) sum = 0;
for (i = 0; i < Math.sqrt(n) / 2; i++)
for ( j = i; j < 8 + i; j++)
for (k = j; k < 8 + j; k++)
sum++;
# solution: O(sqrt(N))

d) sum = 0;
for (i = 1; i < n; i *= 2)
for (j = 0; j < n; j++)
sum++;
#solution: O(N*log(N))

e) sum = 0;
for (i = 0; i < n; i++)
for (j = i + 1; j < n; j++)
for (k = j + 1; k < n; k++)
for (l = k + 1; l < 10 + k; l++)
sum++;
# solution: O(N^3)

f) bunnyEars = function (bunnies) { // here bunnies === n
if (bunnies === 0) return 0;
return 2 + bunnyEars(bunnies-1);
}
# solution: O(N)

g) search = function (array, arraySize, target) { // here arraySize === n
if (arraySize > 0) {
if (array[arraySize-1] === target) return true;
else return search(array, arraySize-1, target);
}
return false;
}
# solution: O(N)


Exercise II
#a
let maxDiff;
const findMax = function(array, constValue) => {
    for (let i = 0; array.length > i: i++) {
        if ((array[constantValue] - array[i]) > maxDiff) {
            maxDiff = array[constantValue] - array[i]
        }
    }
}

#b
?

Exercise III
a)Because the array is already sorted, it will take the most time to organize, it's the worst case scenario, N ?
b)log(N) because the quicksort looks to be a constant function, if it starts in the middle than it might be log(N).

