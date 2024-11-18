// Previous imports remain the same...

export function EditAppointmentDialog({
  open,
  onOpenChange,
  appointment,
  onUpdate,
}: EditAppointmentDialogProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientId: "1",
      time: appointment?.time || "",
      type: appointment?.type.toLowerCase() || "",
      duration: appointment?.duration.split(" ")[0] || "",
      notes: appointment?.notes || "",
      location: appointment?.location || "",
    },
  });

  // Rest of the component logic remains the same...

  return (
    <>
      {showSuccess && (
        <div className="fixed top-4 right-4 w-96 z-50">
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              Appointment successfully updated. A confirmation email will be sent to the patient.
            </AlertDescription>
          </Alert>
        </div>
      )}

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Appointment</DialogTitle>
          </DialogHeader>
          {/* Rest of the component remains the same */}
        </DialogContent>
      </Dialog>
    </>
  );
}