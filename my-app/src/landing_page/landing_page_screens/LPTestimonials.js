
import React from 'react';

const testimonialsData = [
  {
    name: 'Holden Caulfield',
    title: 'Head of Sales',
    text: [
      'Reaching out to big companies like Microsoft always felt like shouting into the void, until Upreach came along. ',
      { bold: 'It was like having a dedicated assistant who knew exactly who to contact and what to say.' },
      ' I was skeptical at first, but the personalized email campaigns Upreach created were nothing short of remarkable. They resonated with the right people, leading to meetings that have opened so many doors for us.'
    ],
    image: '/landing_page_assets/headerImg/person2-preview.png'
  },
  {
    name: 'Ashley Smith',
    title: 'VP of Marketing',
    text: [
      'Marketing to a niche audience in a bustling city like NYC can be daunting. I was lost in a sea of possibilities until Upreach. ',
      { bold: 'Its AI capabilities are precise, pinpointing data scientists who would genuinely benefit from our solution.' },
      ' The targeted outreach was so precise and well-crafted that it felt personal, not automated. Our response rates soared, and so did our sales, leads and revenue.'
    ],
    image: '/landing_page_assets/headerImg/person1-preview.png'
  },
  {
    name: 'Alexa Johnson',
    title: 'Business Analyst',
    text: [
      'As a business analyst focusing on the finance sector, finding the right collaboration opportunities is crucial. ',
      { bold: 'I was looking for finance companies with 50-250 employees interested in document processing.' },
      ' Upreach sifted through mountains of data and pinpointed exactly what I needed. The level of detail and accuracy in its findings has been pivotal in shaping our strategic partnerships.'
    ],
    image: '/landing_page_assets/headerImg/person3-preview.png'
  },
];

const LPTestimonials = () => {
  return (
    <section className="bg-[#1A191A] text-center pt-5 md:pt-20">
      <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-gray-100">Hear what our users have to say</h2>
      <div className='h-full w-screen'>
        <div className="flex justify-start flex-wrap w-full">
          {testimonialsData.map((testimonial, index) => (
            <div className='w-full p-5 md:w-1/3'>
              <div key={index} className={`bg-gradient-to-br from-blue-100 to-white h-full rounded-3xl p-4 md:p-5 shadow-l flex flex-col`}>
                <div className="flex justify-start h-24 w-full">
                  {/* Placeholder for avatar image */}
                  <img
                    src={testimonial.image}
                    alt="DashboardImg"
                    className="lg:cursor-pointer object-cover h-1/2"
                  />
                  <div className='ml-4 flex flex-col'>
                    <h3 className="text-lg font-semibold text-left text-black">{testimonial.name}</h3>
                    <p className="text-gray-500 text-left">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-black text-xl text-left">
                  {testimonial.text.map((part, partIndex) =>
                    typeof part === 'string' ? part : <b key={partIndex}>{part.bold}</b>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LPTestimonials;
