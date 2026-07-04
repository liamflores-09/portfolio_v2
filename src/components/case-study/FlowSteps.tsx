import { FaArrowRight } from "react-icons/fa6";

interface FlowStepsProps {
  steps: { title: string; description: string }[];
}

export function FlowSteps({ steps }: FlowStepsProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border sm:flex-row">
      {steps.map((step, index) => (
        <div key={step.title} className="flex flex-1 items-center">
          <div className="flex-1 border-b border-border p-7 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <h4 className="mb-1 text-sm font-semibold">{step.title}</h4>
            <p className="text-xs text-muted-foreground">{step.description}</p>
          </div>
          {index < steps.length - 1 && <FaArrowRight className="hidden h-3 w-3 shrink-0 text-muted sm:block" />}
        </div>
      ))}
    </div>
  );
}
