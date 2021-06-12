export interface Author {
    name: string;
    resume: string;
    socialMedia: SocialMedia[];
    profilePic: ProfilePic;
    bio: string;
    services: Service[];
    jobs: Job[];
    email: string;
    phone: string;
    education: Education[];
}

export interface Education {
    metadata: Metadata;
    sys: EducationSys;
    fields: EducationFields;
}

export interface EducationFields {
    name: string;
    title: string;
    dateStart: Date;
    dateEnd?: Date;
    institute: string;
    description: string;
}

export interface Metadata {
    tags: any[];
}

export interface EducationSys {
    space: ContentType;
    id: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    environment: ContentType;
    revision: number;
    contentType?: ContentType;
    locale: string;
}

export interface ContentType {
    sys: ContentTypeSys;
}

export interface ContentTypeSys {
    type: Type;
    linkType: LinkType;
    id: string;
}

export enum LinkType {
    ContentType = "ContentType",
    Entry = "Entry",
    Environment = "Environment",
    Space = "Space",
}

export enum Type {
    Link = "Link",
}

export interface Job {
    metadata: Metadata;
    sys: EducationSys;
    fields: JobFields;
}

export interface JobFields {
    name: string;
    title: string;
    start: Date;
    end: Date;
    description: string;
    skills: ContentType[];
    projects: ContentType[];
    currentJob?: boolean;
}

export interface ProfilePic {
    metadata: Metadata;
    sys: EducationSys;
    fields: ProfilePicFields;
}

export interface ProfilePicFields {
    title: string;
    file: File;
}

export interface File {
    url: string;
    details: Details;
    fileName: string;
    contentType: string;
}

export interface Details {
    size: number;
    image: Image;
}

export interface Image {
    width: number;
    height: number;
}

export interface Service {
    metadata: Metadata;
    sys: EducationSys;
    fields: ServiceFields;
}

export interface ServiceFields {
    title: string;
    description: Node;
    featuredImage: ProfilePic;
    active: boolean;
    examples: ContentType[];
}

export interface Node {
    nodeType: string;
    value?: string;
    marks?: any[];
    data: any;
    content?: Node[];
}


export interface SocialMedia {
    href: string;
    name: string;
    value: string;
}
