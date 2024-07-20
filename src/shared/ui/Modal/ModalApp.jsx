import ModalStyle from './Modal.module.scss';
import {useEffect, useState} from "react";

export function ModalApp({user, onClose}){
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (user) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    }, [user]);

    if (!isModalOpen || !user) return null;

    return (
        <section className={ModalStyle.modal} onClick={onClose}>
            <div className={ModalStyle['modal__content']} onClick={(event) => event.stopPropagation()}>
                <h2 className={ModalStyle['modal__fio']}>ФИО: {user.firstName} {user.lastName} {user.maidenName}</h2>
                <div className={ModalStyle['modal__list']}>
                    <p className={ModalStyle['modal__item']}>Возраст: {user.age}</p>
                    <p className={ModalStyle['modal__item']}>Рос: {user.height}</p>
                    <p className={ModalStyle['modal__item']}>Вес: {user.weight}</p>
                    <p className={ModalStyle['modal__item']}>Пол: {user.gender}</p>
                    <p className={ModalStyle['modal__item']}>Телефон: {user.phone}</p>
                    <p className={ModalStyle['modal__item']}>Адрес: {user.address.address}, {user.address.city}</p>
                </div>
            </div>
        </section>
    );
}