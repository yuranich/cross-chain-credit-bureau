import { useEffect } from "react"
import { Authentification } from "./Authentification"
import { Borrowing } from "./Borrowing"
import { Verification } from "./Verification"
import { clsx } from "clsx"
import { useAccount } from "wagmi"
import { useStep } from "~~/hooks/borrowing/useStep"

enum BorrowingSteps {
    Auth = "Authentification",
    Verify = "Verification",
    Borrow = "Borrowing",
}

const STEPS = [BorrowingSteps.Auth, BorrowingSteps.Verify, BorrowingSteps.Borrow]

export function Stepper() {
    const { currentStep, currentStepIndex, goNextStep, resetState } = useStep(STEPS, BorrowingSteps.Verify)
    const { address } = useAccount()

    useEffect(() => {
        resetState()
    }, [address, resetState])

    const renderCurrentStep = (step: BorrowingSteps) => {
        switch (step) {
            case BorrowingSteps.Auth:
                return <Authentification address={address} onSuccess={goNextStep} />
            case BorrowingSteps.Verify:
                return <Verification address={address} onSuccess={goNextStep} />
            case BorrowingSteps.Borrow:
                return <Borrowing address={address} />
            default:
                return null
        }
    }

    return (
        <div className="flex flex-col flex-1 w-full">
            <div className="flex justify-center shrink-0">
                <ul className="steps w-1/2">
                    {STEPS.map((step, i) => (
                        <li key={step} className={clsx("step", currentStepIndex >= i && "step-primary")}>
                            {step}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-1">{renderCurrentStep(currentStep)}</div>
        </div>
    )
}
