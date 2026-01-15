import CreateForm from "@/components/create/create-form";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Create() {
    return <div className="flex justify-center p-5">
        <Card className="p-5">
            <CardTitle>
                Add new recipe
            </CardTitle>
            <CardContent>
                <CreateForm />
            </CardContent>
        </Card>
    </div>
}