import React, {useState} from 'react'
import styles from './Paginator.module.css'
import classnames from 'classnames'



const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize, portionSize=5}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount =  Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber-1)* portionSize + 1;
    let rightPortionNumber = portionSize*portionNumber;

    return <div className={styles.pagination}>
        {portionNumber > 1 && <button className={styles.button} onClick= {() => {setPortionNumber(portionNumber-1) }}> PREV </button>}
        
        {pages
        .filter(p=> p >= leftPortionNumber && p<= rightPortionNumber).map((p) => {
        return <span className={classnames({[styles.selectedPage]:currentPage === p }, styles.pageNumber)} 
                key= {p}
                onClick={(e) => { onPageChanged(p) }}> {p} </span>
    })}
    
    {portionCount > portionNumber && <button  className={styles.button} onClick= {() => {setPortionNumber(portionNumber+1) }}> NEXT </button>}
    </div>
}





export default Paginator;