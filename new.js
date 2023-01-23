const express = require ('express');
const app = express(); 
app.use(express.json());
app.get('/', (req,res)=> {
    res.send('Hello There');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];



app.get('/api/courses', (req,res)=>{
    res.send(courses);
});
app.post('/api/courses', (req,res) => {

    const courseL = courses.find(c => c.id === parseInt(req.params.id)).length();
    if (courseL.min(3)) {
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
    }
    course.

    }
    
    
    
    });
app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
    }
    res.send(course);
})

app.listen(3000, () => {
    console.log('Listening on port 3000 ...')
})