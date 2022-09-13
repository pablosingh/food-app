import styled from 'styled-components';
import { addFoodDinner } from '../redux/actions';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { primaryColor, gray, hoverColorText, hoverColorBackground } from '../styles/colors';
import { BtnAnimated } from './BtnAnimated';
// import { useDispatch } from "react-redux";

export const Card = props => {
    const dispatch = useDispatch();
    const { food } = props;
    return (
        <Container>
            {/* <Link to="/search" 
                className='linkDog'
                onClick={ () => {
                    // dispatch(searchDog(id));
                    console.log(id);
                }}> */}
                <div className="linkFood">
                    <h4 className='title'>  {food?.strMeal}</h4>
                    <img src={food?.strMealThumb} alt="Food" className='image'/>
                    <span className='description'>
                        <p className='black'>Detalles: </p>
                        <p>
                        <span>{food?.strArea} | </span>
                        <span>{food?.strCategory}</span>
                        </p>
                        <p>
                        <span><a href={food?.strSource}>Web</a> | </span>
                        <span><a href={food?.strYoutube}>Youtube</a></span>
                        </p>
                    </span>
                    {/* <button className='btnCard'
                        onClick={ () => {
                            // console.log(food?.idMeal);
                            dispatch(addFoodDinner({
                                idMeal: food?.idMeal,
                                strMeal: food?.strMeal
                            }));
                            props?.handleClose();
                        }}>Agregar
                    </button> */}
                    <BtnAnimated handleClick={  () => {
                            // console.log(food?.idMeal);
                            dispatch(addFoodDinner({
                                idMeal: food?.idMeal,
                                strMeal: food?.strMeal
                            }));
                            props?.handleClose();
                        }} text='Agregar' />
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