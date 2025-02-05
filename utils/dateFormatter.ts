export function ISO_To_Normal(isoDate: string): string {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',   // "Feb"
        day: 'numeric',   // "4"
        year: 'numeric',  // "2025"
        timeZone: 'UTC'   // Use UTC to avoid timezone shifts
    });
    return formattedDate
}