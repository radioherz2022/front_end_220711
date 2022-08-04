let movieList = [
    {
      id: 1,
      title: "쏘울",
      actors: "마동석, 손석구",
      star: 4.5,
    },
    {
      id: 2,
      title: "블랙의 신부",
      actors: "김희선, 나이름",
      star: 4,
    },
    {
      id: 3,
      title: "이상한 변호사 우영우",
      actors: "박은빈, 김다미",
      star: 5,
    },
  ];
  
  function Movie({ movie }) {
    const { title, actors, star } = movie;
    return (
      <li>
        <h2>{title}</h2>
        <div>{actors}</div>
        <div>{star}</div>
      </li>
    );
  }
  
  function MovieList() {
    return (
      <ul>
        {movieList.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </ul>
    );
  }
  
  export default MovieList;
  