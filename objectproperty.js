const students = [
    {id : 21, name: "Tamim Karim" },
    
    {id : 51, name: "Raiha Anushka" },
    
    {id : 61, name: "Iffat Jahin" },
    
    {id : 28, name: "Niloy Sarwar" }
];
 const names = students.map( s=> s.name);
 const ids = students.map( s => s.id);
 const bigger = students.filter( s=> s.id>40);
 const biggerOne = students.find (s => s.id>40);
 console.log(biggerOne); 