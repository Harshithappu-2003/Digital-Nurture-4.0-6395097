import React from 'react';
import './App.css';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

export const blogs = [
  { id: 201, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 202, title: 'Installation', author: 'Schwzdenier', content: 'You can install React from npm.' },
];

export const courses = [
  { id: 301, name: 'Angular', date: '4/5/2021' },
  { id: 302, name: 'React', date: '6/3/2020' },
];

function BookDetails(props) {
  const bookdet = (
    <ul>
      {props.books.map(book => (
        <li key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </li>
      ))}
    </ul>
  );
  return <>{bookdet}</>;
}

function BlogDetails(props) {
  const content = (
    <ul>
      {props.blogs.map(blog => (
        <li key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </li>
      ))}
    </ul>
  );
  return <>{content}</>;
}

function CourseDetails(props) {
  const coursedet = (
    <ul>
      {props.courses.map(course => (
        <li key={course.id}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </li>
      ))}
    </ul>
  );
  return <>{coursedet}</>;
}

function App() {
  return (
    <div className="app-container">
      <div className="section-wrapper">
        <div className="st2">
          <h1>Course Details</h1>
          <CourseDetails courses={courses} />
        </div>
        <div className="v1">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
        <div className="mystyle1">
          <h1>Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>
      </div>
    </div>
  );
}

export default App;
