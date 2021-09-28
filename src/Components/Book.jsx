   

function Book(props) {

    return (
        <div className="book">
            <div className='author'>{props.data.author}</div>
            <div clasname='title'> {props.data.title}</div>
            <img clasname='img' src={props.data.img} alt="#" />
            <div className='price'>{props.data.price}</div>
            <button className='btn' >pirkti</button>
            <div className= 'time'>{props.data.time}</div>

 
        </div>
    );
}

export default Book;