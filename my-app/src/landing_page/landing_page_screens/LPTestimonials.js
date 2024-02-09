
import React from 'react';
import Star_ratings from '../../images/Star_ratings.svg';

const testimonialsData = [
  {
    name: 'Cathy Huang',
    title: 'CEO Of Folio',
    text: [
      { bold: ' "Love working with Christy! She is my go to for product design, graphic design, and product operations" ' },
    ],
    subtext: [
      ' "Very talented, proactive and easy to work with. Highly recommend Christy for design and creative projects. She is an outstanding UI/UX designer. Very efficient, asks great questions, and is responsive and professional" ',
    ],

  },
  {
    name: 'Maura McInery-Rowley',
    title: 'Founder of Memento Mori',
    text: [
      {bold: ' "Christy is a joy to work with!" ' },
    ],
    subtext: [
      ' "She is efficient and talented in her designs. She recieves feedback well and is able to translate your vision into a beautiful product" '
    ],

  },
  {
    name: 'Tabinda',
    title: 'CEO of Trrrimber',
    text: [
      { bold: ' "Highly recommend Christy for product design, graphic design, UI/UX, and prototyping!" '},
    ],
    subtext: [
      ' "Very impressed with Christy\'s product design skills. She created a complete marketplace prototype for us in a week and handed off to the engineers to make the process really easy" ',
    ],

  },
];

const LPTestimonials = () => {
  return (
    <section className="bg-[#F2F2F2] text-center pt-5 md:pt-20">
      <h2 className="text-2xl md:text-4xl font-medium mb-12 text-[#213A52]">some people i've enjoyed working with :)</h2>
      <div className='h-full w-screen'>
        <div className="flex justify-start flex-wrap w-full">
          {testimonialsData.map((testimonial, index) => (
            <div className='mx-auto w-4/5 py-4 px-8 md:5'>
              <div key={index} className={`bg-white h-full rounded-2xl py-4 md:p-10 shadow-l flex flex-col`}>
                <div className="flex justify-start h-18 w-full">
                  <div className='ml-4 flex flex-col'>
                  </div>
                </div>
                <p className="text-black text-lg text-left mt-4 mb-4">
                  {testimonial.text.map((part, partIndex) =>
                    typeof part === 'string' ? part : <b key={partIndex}>{part.bold}</b>
                  )}
                </p>
                    <div className="text-lg font-regular text-left text-black mb-4">{testimonial.subtext}</div>
                    <h3 className="text-lg font-medium text-left text-black">{testimonial.name}</h3>
                    <div className="text-medium font-medium text-left text-black mb-4">{testimonial.title}</div> 
                    <img
                      src={Star_ratings}
                      alt="DashboardImg"
                      className="cursor-pointer"
                      style={{ width: '10%', height: 'auto', marginLeft: '-3px' }}
                    />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LPTestimonials;
