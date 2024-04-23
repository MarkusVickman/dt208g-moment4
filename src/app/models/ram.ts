//Interface för att typsäkra objecthanteringen för ramschemat som hämtas i servicen getschedule

export interface Ram {
    code: string;
    coursename: string;
    progression: string;
    syllabus: string;
}
