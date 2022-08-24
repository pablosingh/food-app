import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { primaryColor, gray, hoverColorText, hoverColorBackground } from '../styles/colors';
// import { useDispatch } from "react-redux";

export const Card = props => {
    // const dispatch = useDispatch();
    const { 
        id,
        name,
        description,
        image
    } = props.food;
    return (
        <Container>
            {/* <Link to="/search" 
                className='linkDog'
                onClick={ () => {
                    // dispatch(searchDog(id));
                    console.log(id);
                }}> */}
                <div className="linkFood">
                    <h4 className='title'>  {name}</h4>
                    <img src={image} alt="Food" className='image'/>
                    <span className='description'>
                        <p className='black'>Descripcion: </p>
                            {description}
                        </span>
                    <button className='btnCard'
                        onClick={ () => {
                            console.log(id);
                        }}>Agregar
                    </button>
                </div>
            {/* </Link> */}
        </Container>
    )
};

const Container = styled.div`
    @media(max-width: 768px){
        width: 40vw;
    }
    @media(min-width: 768px){
        width: 20vw;
    }
    margin: 1em 2em;
    padding: 1em;
    background-color: ${primaryColor};
    border-radius: 2em;
    .linkFood{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
        .title{
            margin: 0em 0.5em 0em 0em;
            font-size: 1.3em;
        }
        .image{
            margin: 0.5em;
            border-radius: 1em;
            @media(max-width: 768px){
                width: 40vw;
            }
            @media(min-width: 768px){
                width: 10vw; 
            }
        }
        .description{
            margin: 0.5em;
            .black{
                font-weight: bold;
            }
        }
    }
    .btnCard{
        background-color: ${gray};
        color: white;
        margin: 0.5em 0.5em;
        padding: 0.5em 1em;
        border-radius: 2em;
    }
    .btnCard:hover{
        background-color: ${hoverColorText};
        color: ${hoverColorBackground};
    }
`;