import CircuitBuilder from "@/components/labBlock/builder";

export default function Block() {
    return (
        <div className="tw-h-screen tw-w-screen tw-flex tw-flex-col">
            <div className="tw-h-full tw-w-full">
                <CircuitBuilder />
            </div>

        </div>
    )
}