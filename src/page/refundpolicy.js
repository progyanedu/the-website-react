import React from 'react';

const RefundPolicy = () => {
    return (
        <div className='h-auto items-center flex flex-col bg-gray-900'>
            <section className='heading h-[10%] flex items-center justify-center p-20 mt-20'>
                <span className='max-w-2xl mb-4 text-xl md:text-4xl font-extrabold'>Refund Policy</span>
            </section>
            <div>

                <div className="p-10 flex flex-col text-start">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Refund Eligibility</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our refund policy applies to eligible purchases made on PROGYAN Education's platform.
                    </p>
                </div>

                <div className="p-10 flex flex-col text-start">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Refund Process</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you are eligible for a refund, the process will be initiated according to our refund policy.
                    </p>
                </div>

                <div className="p-10 flex flex-col text-start">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Refund Timeline</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        The time it takes to process a refund depends on various factors. We aim to complete the process as quickly as possible.
                    </p>
                </div>

                <div className=" p-10 flex flex-col text-start">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Refund Exceptions</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Certain circumstances may exempt your purchase from being eligible for a refund.
                    </p>
                </div>

                <div className="p-10 flex flex-col text-start ">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you have any questions about our Refund Policy, please contact us at <a href="mailto:refund@progyanedu.com">refund@progyanedu.com</a>.
                    </p>
                </div>
        </div>
            </div>
    );
};

export default RefundPolicy;
