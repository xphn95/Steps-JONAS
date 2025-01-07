import { useState } from 'react'
import Button from './Button'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑'
]

const messagesLength = messages.length

const App = () => {
  const [step, setStep] = useState(1),
    [isOpen, setIsOpen] = useState(true)
  // 第二个参数最好传入函数（函数参数为该状态此时的初始值），这样每次会计算初始值避免副作用， 提高性能和可维护性
  return (
    <>
      <button
        className='close'
        onClick={() => setIsOpen(i => !i)}
      >
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            {/* <div className="active">1</div> */}
            {messages.map((_, index) => (
              <div
                className={step > index ? 'active' : ''}
                key={index}
              >
                {index + 1}
              </div>
            ))}
            {/* <div className={step > 1 ? 'active' : ''}>2</div>
            <div className={step > 2 ? 'active' : ''}>3</div> */}
          </div>
          <p className='message'>
            Step: {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <Button
              bgColor='#7950f2'
              color='#fff'
              handleClick={() => setStep(s => (s > 1 ? s - 1 : 1))}
            >
              <span>👈🏻</span>Previous
            </Button>
            <Button
              bgColor='#7950f2'
              color='#fff'
              handleClick={() =>
                setStep(s => (s < messagesLength ? s + 1 : messagesLength))
              }
            >
              Next<span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
