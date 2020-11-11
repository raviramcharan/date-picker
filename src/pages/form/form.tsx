import React, { useRef, useState } from 'react';
import classes from './form.module.scss';
import personImg from '../../shared/hand-holding.jpg';

const Form = () => {
  const [text, setText] = useState<string>('');
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  const textRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const baseUrl = 'https://api.whatsapp.com/send?text=';

  const redirectUrl = `http://localhost:3000/rvsp/${text}/${date}/${time}`;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!e.target) return;
    const textInput = e.target[0].value;
    const dateInput = e.target[1].value;
    const timeInput = e.target[2].value;
    setText(textInput);
    setDate(dateInput);
    setTime(timeInput);
    console.log(e.target[0].value);
    window.open(
      `${baseUrl}${text} op ${date} om ${time} - Reageer op de volgende link: ${redirectUrl}`
    );
  };

  const handleTextChange = () => {
    if (!textRef.current) return;
    setText(textRef.current.value);
  };

  const handleDateChange = () => {
    if (!dateRef.current) return;
    setDate(dateRef.current.value);
    // console.log(typeof dateRef.current.value);
    // console.log(`Date is ${dateRef.current.value}`);
  };

  const handleTimeChange = () => {
    if (!timeRef.current) return;
    setTime(timeRef.current.value);
    // console.log(typeof timeRef.current.value);
    // console.log(`Time is ${timeRef.current.value}`);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.formData}>
        <h3 className={classes.title}>Afspraakje maken?</h3>
        <textarea
          data-testid="a"
          name="direction"
          id="direction"
          className={classes.textArea}
          value={text}
          onChange={handleTextChange}
          ref={textRef}
          placeholder="Your description"
          required
        />
        <input
          type="date"
          id="date"
          className={classes.date}
          value={date}
          ref={dateRef}
          onChange={handleDateChange}
          required
        />
        <input
          data-testid="time"
          aria-label="time"
          type="time"
          id="time"
          className={classes.time}
          ref={timeRef}
          onChange={handleTimeChange}
          value={time}
          required
        />
        <input
          className={classes.submitButton}
          type="submit"
          value="Verzend bericht"
        />
      </form>
      <img src={personImg} alt="person" className={classes.personImg} />
    </div>
  );
};

export default Form;
