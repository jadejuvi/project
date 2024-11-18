// Previous imports remain the same...

export function AppointmentDetailsDialog({
  open,
  onOpenChange,
  appointment,
}: AppointmentDetailsDialogProps) {
  const [editOpen, setEditOpen] = useState(false);

  if (!appointment) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          {/* Rest of the component remains the same */}
        </DialogContent>
      </Dialog>

      <EditAppointmentDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        appointment={appointment}
      />
    </>
  );
}