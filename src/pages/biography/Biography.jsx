import React from 'react';
import './Biography.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const Biography = () => {
    const nav = useNavigate()
  return (
    <div className='biography'>
        <div className="container-bio">
            <ArrowBackIcon onClick={() => {nav('/')}} className='arrowBackIcon' />
            <h1 className='text-main'>MY BIOGRAPHY</h1>

            <div className='block-text text-1-block'>
                <p className='text-p text-1-block-p'>
                Меня зовут Нуржигит Усупов,
                 и я родился 18 июня 2005 года.
                  Я успешно закончил 11 классов в
                   2022 году и принял решение поступить 
                   в Кыргызский Государственный Технический
                    университет, выбрав сферу кибербезопасности
                </p>
            </div>
            <div className='block-text text-2-block'>
                <p className='text-p text-2-block-p'>
                В марте 2023 года я начал обучение на курсе веб-разработки, и смог успешно завершить его в сентябре того же года. Этот курс принес мне много ценного опыта в разных аспектах веб-разработки.
                </p>
            </div>
            <div className='block-text text-3-block'>
                <p className='text-p text-3-block-p'>
                Моя карьера в веб-разработке началась с получения моего первого заказа от моего брата. В этот момент я столкнулся с рядом важных задач, таких как работа с Firebase для хранения данных, обработка ошибок, а также проверка условий для регистрации пользователей и аутентификации по логину и паролю.                </p>
            </div>
            <div className='block-text text-4-block'>
                <p className='text-p text-4-block-p'>
                Также, работая над проектами в одиночку, я научился деплоить веб-сайты и приобрел знания о доменах и хостинге. Этот опыт сильно улучшил мои навыки в области веб-разработки и расширил мое понимание ключевых аспектов веб-технологий                 </p>
            </div>
        </div>
    </div>
  )
}

export default Biography