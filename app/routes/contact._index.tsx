import {useForm} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/components/UI/form";
import {Input} from "~/components/UI/input";

function Contact() {
  const form = useForm()

  return <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
      )}
  />
}

export default Contact;
