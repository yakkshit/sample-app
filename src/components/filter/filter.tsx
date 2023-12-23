import classNames from 'classnames';
import styles from './filter.module.scss';

export interface FilterProps {
    className?: string;
    industries: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Filter: React.FC<FilterProps> = ({ className, industries }) => {
    return (
        <div
            className={`${className} mx-auto flex-auto rounded-full md:mx-0 md:w-auto md:max-w-md`}
        >
            <div className="flex-wrap:nowrap flex  flex-wrap md:w-auto">
                {industries.map((industry, index) => (
                    <div key={index} className="relative mb-2 sm:mr-2 sm:w-full md:w-auto">
                        <label htmlFor={industry} className="sr-only">
                            {industry}
                        </label>
                        <select
                            id={industry}
                            name={industry}
                            className="mt-1 block w-full rounded-full border-blue-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                            {/* Add options for the current industry */}
                            <option value={`${industry}-option1`}>{industry}</option>
                            <option value={`${industry}-option2`}>Option 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};
