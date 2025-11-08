/**
 * Utility functions for formatting data for display
 */

export class DateFormatter {
  static formatDate(dateString: string): string {
    if (dateString.toLowerCase() === "present") {
      return "Present";
    }

    // Handle YYYY-MM format to avoid timezone issues
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split("-").map(Number);
      const date = new Date(year, month - 1, 1);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    }

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  }

  static formatDateRange(start: string, end: string): string {
    return `${this.formatDate(start)} - ${this.formatDate(end)}`;
  }

  static getYear(dateString: string): number {
    return new Date(dateString).getFullYear();
  }
}

export class TextFormatter {
  static truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength).trim() + "...";
  }

  static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  static capitalizeFirst(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

export class AuthorFormatter {
  static formatAuthors(
    authors: string[],
    currentAuthor: string = "Your Name",
    annotations?: { [authorName: string]: string },
    penName?: string
  ): string {
    return authors
      .map((author) => {
        const annotation = annotations?.[author] || "";
        const isYou = author === currentAuthor || author === penName;
        const formattedName = isYou ? `<strong>${author}</strong>` : author;
        return annotation
          ? `${formattedName}<sup>${annotation}</sup>`
          : formattedName;
      })
      .join(", ");
  }

  static getAuthorInitials(name: string): string {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }
}
