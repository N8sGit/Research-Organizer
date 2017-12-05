import React from 'react'

export default class Paginator extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        let pageButtons =[]

        for(var i =0; i<this.props.pageCount; i++){
            pageButtons.push(i)
        }
        return(
            <div>
                {pageButtons.map((page)=>{
                    return <p className='paginations' type='button' onClick ={()=>{
                            this.props.selectIndex(page)
                        }
                    }> 
                        [{page}] 
                    </p>
                    })
                }
            </div>
        )
    }
}

