//Function to Calculate the Average of Even Numbers
function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const total = evenNumbers.reduce((acc, num) => acc + num, 0);
    return evenNumbers.length > 0 ? total / evenNumbers.length : 0;
}
console.log(averageOfEvenNumbers([1, 2, 3, 4, 5, 6])); 

//Function to Find the Longest Word
function longestWord(words) {
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(longestWord(["apple", "banana", "cherry", "watermelon"])); 

// Function to Calculate the Average Number of Pages Across All Books
function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return books.length > 0 ? totalPages / books.length : 0;
}
console.log(averagePages([{ title: "Book 1", author: "Author 1", pages: 200 }, 
                          { title: "Book 2", author: "Author 2", pages: 300 }]));


 //Function to Count Frequency of Each String
 function stringFrequency(strings) {
    return strings.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}
console.log(stringFrequency(["hello", "world", "hello"])); 


//Function to Count People by City
function countPeopleByCity(people) {
    return people.reduce((acc, person) => {
        acc[person.city] = (acc[person.city] || 0) + 1;
        return acc;
    }, {});
}
console.log(countPeopleByCity([
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
])); 

                         



