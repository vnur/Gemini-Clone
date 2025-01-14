// export const Practices = () => {
//   const students = [5];
//   console.log(Boolean(students.length));
//   console.log(students.length);
//   return (
//     <>
//       {/* <p>{students.length && "No students found"}</p> */}
//       {/* 1st  */}
//       {/* <p>{students.length === 0 && "No students found"}</p> */}
//       {/* 2nd */}
//       {/* <p>{!students.length && "No students found"}</p> */}
//       {/* 3rd  */}
//       <p>{!Boolean(students.length) && "No students found"}</p>
//       <p>Number of students: {students.length}</p>
//     </>
//   );
// };


export const Practices = ()=>{
const students= []

  return (
<>


{/* first sol */}
{/* <p>{students.length===0 && 'no students found'}</p> */}
{/* <p>{!students.length && 'no students found'}</p> */}
<p>{!Boolean(students.length) && 'no students found'}</p>


<h1>students legth = {students.length}</h1>

</>
)
}