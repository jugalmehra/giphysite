import React from 'react';




const Paginate = (props) => {

    const pagenumbers = [];

    for(let i = 1; i<= Math.ceil(props.totalitems / props.itemsperpage); i++){
        pagenumbers.push(i);
    }


    return(
        <nav>
            <ul className="pagination pagination-sm justify-content-center border-0">
                {pagenumbers.map(number => {

                    let classes = "page-items"
                    if(number === props.currentpage){
                        classes += "active"
                    }

                    return(
                        <li className={classes}>
                            <a onClick={()=>props.pageSelected(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );

}

export default Paginate;