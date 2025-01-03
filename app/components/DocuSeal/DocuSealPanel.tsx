'use client';

import { DocusealForm } from '@docuseal/react'
import { useDocuSealContext } from '@/contexts/DocuSealContext';

const DocuSealPanel = () => {
    const { docusealValues, closeDocuSeal } = useDocuSealContext();

    if (!docusealValues) return null;

    return (
        <div className="border-r border-gray-200">
            <DocusealForm
                src="https://docuseal.com/d/U4VZ2N1dPEAdZJ"
                values={docusealValues}
                email={docusealValues.email ? docusealValues.email as string : ''}
                className="w-full h-screen"
                language="en"
                withFieldNames={false}
                readonlyFields={['name', 'last_name', 'email', 'street', 'city', 'state', 'zip_code', 'country', 'company_name']}
                onComplete={(data) => {
                    console.log(data);
                    closeDocuSeal();
                }}
            />
        </div>
    );
};

export default DocuSealPanel; 
