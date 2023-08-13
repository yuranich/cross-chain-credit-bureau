import { useCallback, useMemo, useState } from "react"

export function useStep<T>(steps: T[], initStep?: T) {
    const [stepIndex, setStepIndex] = useState(() => (initStep ? steps.findIndex(s => initStep === s) ?? 0 : 0))

    const currentStep = useMemo(() => steps[stepIndex], [steps, stepIndex])

    const goNextStep = useCallback(() => {
        setStepIndex(step => (step < steps.length - 1 ? step + 1 : step))
    }, [steps])

    const resetState = useCallback(() => {
        setStepIndex(0)
    }, [])

    return {
        done: stepIndex === steps.length - 1,
        currentStepIndex: stepIndex,
        currentStep,
        goNextStep,
        resetState,
    }
}
