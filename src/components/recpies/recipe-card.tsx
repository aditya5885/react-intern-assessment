import { Card, CardDescription, CardTitle } from "../ui/card";

interface RecipieCardProps {
    index: string
    title: string;
    description: string
}

export default function RecipieCard({ index, title, description }: RecipieCardProps) {
    return <Card className="p-3 hover:cursor-pointer" key={index}>
        <CardTitle>
            {title}
        </CardTitle>
        <CardDescription>
            {description}
        </CardDescription>
    </Card>
}