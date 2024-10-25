import React from 'react';

const ResumeLink: React.FC = () => {
    return (

        <div className='w-full text-center flex items-center justify-center h-[40px] text-white text-lg mt-8 mb-4'>
        
            <h3>
                Download My Resume <a href="/ZanesResume.docx" target="_blank" rel="noopener noreferrer" className='underline'>Here</a>
            </h3>
      
      </div>

    );
};

export default ResumeLink;