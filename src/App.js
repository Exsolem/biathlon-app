import { useEffect, useState } from "react";
import MyTable from "./Table/MyTable";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





const App = () =>  {

  const [array, setArray] = useState([]);
  const [sortedArray, setSorted] = useState([]);

  const sortByAccuracy = () => {
    setSorted( oldArr => [...oldArr.sort( (a,b) => b.accuracy - a.accuracy)])
  }
  const sortByName = () => {
    setSorted( oldArr => [...oldArr.sort( (a,b) =>{

          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;

          return 0;
    }

    )])
  }
  const sortByPlace = () => {
    setSorted( oldArr => [...oldArr.sort( (a,b) =>  a.id - b.id )])
  }
  const sortByRate = () => {
    setSorted( oldArr => [...oldArr.sort( (a,b) =>  a.rate - b.rate  )])
  }

  const find = (e) => {

    const result = array.filter( item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    setSorted( result);
  }

  useEffect(()=> {
    const names = ['Эндре Стрёмсхайм',
      'Якко Олави Ранта',
      'Габриэл Стегмайр',
      'Антон Бабиков',
      'Миха Довжан',
      'Томмазо Джакомел',
      'Скотт Гоу',
      'Айдан Миллар',
      'Александер-Фьелд Андерсен',
      'Алекс Чисар',
      'Дмитрий Пидручный',
      'Симон Эдер',
      'Рок Тршан',
      'Артём Прима',
      'Семён Сучилов',
      'Никлас Хартвег',
      'Артём Тищенко',
      'Матвей Елисеев',
      'Клемен Бауэр'
    ]

    names.forEach( (item,id) => {
      setArray( oldArr => {
        return [...oldArr,
          {
            name: item,
            accuracy: Math.floor(Math.random() * (100-50) + 50),
            rate: Math.floor(Math.random() * (40-20) + 20),
            id
          }
        ]
      })
    });

  },[])

  useEffect(() =>{
    setSorted(array)
  },[array])

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-group mb-3">
          <input
                 type="text"
                 onChange={find}
                 className="form-control"
                 placeholder="Search by name"
                 aria-label="Search"
          />
        </div>

        <MyTable
            sortedArray={sortedArray}
            sortByAccuracy={sortByAccuracy}
            sortByName={sortByName}
            sortByPlace={sortByPlace}
            sortByRate={sortByRate}
        />
      </header>

    </div>
  );
}

export default App;
