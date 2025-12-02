import { useLabels } from '../hooks'
import { LoadingSpinner } from '../../shared'

interface LabelPickerprops {
    selectedLabels: string[]
    onLabelSelected: (arg: string) => void
}

export const LabelPicker = ({ onLabelSelected, selectedLabels }: LabelPickerprops) => {
    const { labelsQuery } = useLabels()

    if (labelsQuery.isLoading) {
        return (
            <div className='flex justify-center items-center h-52'>
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <div className='flex flex-wrap gap-2 justify-center'>
            {labelsQuery.data?.map((label) => (
                <span
                    key={label.id}
                    onClick={() => onLabelSelected(label.name)}
                    className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white
                        ${selectedLabels.includes(label.name) ? 'selected-label' : ''}`}
                    style={{ border: `1px solid #${label.color}` }}
                >
                    {label.name}
                </span>
            ))}
        </div>
    )
}
