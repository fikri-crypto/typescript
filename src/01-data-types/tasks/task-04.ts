import { DynamicLibrary } from "node:ffi";

/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
type library = {
    IsbnNumber: number;
    title: string;
    authorName: string;
    totalPage: number;
    kategori: string;
    available: boolean;
};
const book: library[] = [
    {
        IsbnNumber: 110,
        title: "Bumi",
        authorName: "GorgonSurya",
        totalPage: 14,
        kategori: "pengetahuannnn2",
        available: true
    },
    {
        IsbnNumber: 1100,
        title: "Bumiku",
        authorName: "Gorgon",
        totalPage: 143,
        kategori: "pengetahuan",
        available: true
    },
    {
        IsbnNumber: 1100,
        title: "Neraka",
        authorName: "GorgonSuryaabadi",
        totalPage: 1433,
        kategori: "agama",
        available: true
    },


]
console.log(book);
