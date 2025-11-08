/**
 * Utility functions for sorting data collections
 */

import type { Publication, Project, Experience, Education } from '@common/index';

export class PublicationSorter {
  static byYear(publications: Publication[]): Publication[] {
    return [...publications].sort((a, b) => b.year - a.year);
  }

  static byFeatured(publications: Publication[]): Publication[] {
    return [...publications].sort((a, b) => {
      if (a.featured === b.featured) {
        return b.year - a.year;
      }
      return a.featured ? -1 : 1;
    });
  }

  static groupByYear(publications: Publication[]): Map<number, Publication[]> {
    const grouped = new Map<number, Publication[]>();
    
    publications.forEach(pub => {
      const year = pub.year;
      if (!grouped.has(year)) {
        grouped.set(year, []);
      }
      grouped.get(year)!.push(pub);
    });

    return new Map([...grouped.entries()].sort((a, b) => b[0] - a[0]));
  }
}

export class ProjectSorter {
  static byDate(projects: Project[]): Project[] {
    return [...projects].sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  static byFeatured(projects: Project[]): Project[] {
    return [...projects].sort((a, b) => {
      if (a.featured === b.featured) {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.featured ? -1 : 1;
    });
  }
}

export class ExperienceSorter {
  static byDate(experiences: Experience[]): Experience[] {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
  }
}

export class EducationSorter {
  static byDate(education: Education[]): Education[] {
    return [...education].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
  }
}

