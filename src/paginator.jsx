import React from 'react'

export default class Paginator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pageSelected: 0
        }
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
                    return <div className='paginations' type='button' onClick ={()=>{
                            this.props.selectIndex(page)
                            this.state.pageSelected = page
                            this.setState(this.state)
                        }
                    }> 
                        {this.state.pageSelected===page ? <p id='pageSelected'>[{page}]</p>: <p>[{page}]</p>} 
                    </div>
                    })
                }
            </div>
        )
    }
}

