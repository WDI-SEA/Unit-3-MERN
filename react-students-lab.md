<img src="https://i.imgur.com/KBwhRtk.png">

# React "Students" Lab

## Intro

We have now gone over:

- How to pass info as props from a parent to a child component
- How to map arrays of info to components
- How to use function components to render info provided as props

Time for some practice repeating what you know about React so far!


## Set Up

Please complete this lab using Create-react-app.

## Minimum Requirements

**The layout and styling of the markup is left up to your discretion.**

<strong>Objective:</strong> A difficult but important React skill is, if you have an array of js objects in state (eg., products out of your database if you're amazon), can you make them show up beautifully? In this lab, you will practice this difficult but important skill.

<strong>Summary of Both Tasks:</strong> 
1. Task 1: You will have to create a <Student> component for each object in the students array (held in your app's state). 

<img src="https://user-images.githubusercontent.com/24878576/126649844-c324028d-af78-415f-ab75-ac808379f784.png">

2. Task 2: And then, inside each student object, there's an array of scores. You will secondly have to create a <Score> component for each score. Here's a diagram I made to maybe help (sorry, my tablet was in the shop and I had to use the mouse for this):

<img src="https://user-images.githubusercontent.com/24878576/114316527-f5f13480-9ad1-11eb-8dad-9d68c3d9ee28.png">

# Setup

1. Create a new react app using create-react-app
2. Make sure that App is defined in App.js

# Task 1:

1. Use the following array of "student" data to initialize a `students` property in the `<App>` component's `state`:

```js
state = { 
  students: [
    {
      name: 'Nahid',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: []
    },
    {
      name: 'Ahlam',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: []
    },
    {
      name: 'Taher',
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: []
    }
  ],
}
```

2. Code a `<Student>` component as a function component that:

	- Renders the student's `name` & `bio` properties

3. Code the `<App>` component's `return` to display a `<Student>` component for each student object in the `students` array being held in state. Ideally, use a map, eg., `students.map( ...)` to make the 3 students show up.
4. Make sure to pass props into the `<Student>` component in order to get the name and bio to show up.

Your finished code for Task 1 might look like this, with the student's name and bio showing up:
<img src="https://user-images.githubusercontent.com/24878576/126649844-c324028d-af78-415f-ab75-ac808379f784.png" >


# Task 2:

1. Update your "students" array in state. Give each student a subarray of scores:

```js
state = { students: [
  {
    name: 'Nahid',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Ahlam',
    bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Taher',
    bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  }
],
}
```

2. Update the `<Student>` component to do both of these things now:

	- Render the student's `name` & `bio` properties
	- Render a `<Score>` component for each score object in the student's `scores` property.

4. Code the `<Score>` component as a function component that renders the score object's `date` & `score` properties.

5. Your finished code might look something like this:

<img src="https://user-images.githubusercontent.com/24878576/114316323-0e148400-9ad1-11eb-9e99-60972ac80897.png">



