CREATE TABLE `Companies` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contactName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contactPhone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contactEmail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `domain` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `suspended` int COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `banned` int COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`contactEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Users` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `familyName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(72) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastLanguage` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lastType` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lastGender` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `confirmed` int COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `accessLevel` int COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `suspended` int COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `banned` int COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `company_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`company_id`) REFERENCES `Companies`(`id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Authors` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Languages` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Types` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Genders` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`type_id`) REFERENCES `Types`(`id`),
  UNIQUE KEY `name_type_key` (`name`,`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Books` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uploaded_by` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_language_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `translation_language_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(100) COLLATE utf8mb4_unicode_ci NULL,
  `is_article` int NOT NULL DEFAULT '0',
  `in_publication` varchar(100) COLLATE utf8mb4_unicode_ci NULL,
  `in_publication_no` varchar(20) COLLATE utf8mb4_unicode_ci NULL,
  `edition` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`uploaded_by`) REFERENCES `Users`(`id`),
  FOREIGN KEY (`author_id`) REFERENCES `Authors`(`id`),
  FOREIGN KEY (`original_language_id`) REFERENCES `Languages`(`id`),
  FOREIGN KEY (`translation_language_id`) REFERENCES `Languages`(`id`),
  FOREIGN KEY (`type_id`) REFERENCES `Types`(`id`),
  FOREIGN KEY (`gender_id`) REFERENCES `Genders`(`id`),
  FOREIGN KEY (`company_id`) REFERENCES `Companies`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Posts` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ext` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `company_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
  FOREIGN KEY (`language_id`) REFERENCES `Languages`(`id`),
  FOREIGN KEY (`type_id`) REFERENCES `Types`(`id`),
  FOREIGN KEY (`gender_id`) REFERENCES `Genders`(`id`),
  FOREIGN KEY (`company_id`) REFERENCES `Companies`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Comments` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` varchar(19) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`post_id`) REFERENCES `Posts`(`id`),
  FOREIGN KEY (`company_id`) REFERENCES `Companies`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
