import React from "react";
import {CardType} from "../../dal/cards-api";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import style from "./Card.module.css"

type CardPropsType = {
    card: CardType
    packId: string
    updateCard: (_id: string) => void
    deleteCard: (id: string) => void
}

const Card: React.FC<CardPropsType> = (props) => {
    const updateCard = () => {
        props.updateCard(props.card._id)
    }

    const deleteCard = () => {
        props.deleteCard(props.card._id)
    }

    return (
        <>
            <tr className={style.cardContainer}>
                <td>{props.card.question}</td>
                <td>{props.card.answer}</td>
                <td>{props.card.grade}</td>
                <td>{props.card.updated}</td>
                <SuperButton onClick={updateCard}>update</SuperButton>
                <SuperButton onClick={deleteCard}>delete</SuperButton>
            </tr>

        </>
    );
}

export default Card;
