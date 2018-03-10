
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (1, 'Qui finance Twitter ?', NOW()+ interval '2 min', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/twitter_finance.png');
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (2, 'Comment des habitants ont sauvé 20 baleines du cyclone Mora au  Sri Lanka ? ', NOW()+ interval '10 min', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/cyclone_mora.png');
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (3, 'La cuisine est-elle un art ou une science ?', NOW()+ interval '50 min', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/kitchen_art.png');
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (4, 'Que font vraiment les créateurs d''entreprises et de grandes startup? Par exemple, qu’est-ce que Jeff Bezos dirige exactement chez Amazon ?', NOW()+ interval '1 hour', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/jeff_bezoz.png');
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (5, 'A une époque où les gens croient de plus en plus à n''importe quelle thèse conspirationniste doit-on réguler l''information ?', NOW()+ interval '2 hour', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/conspiration.png');
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (6, 'Qui sont les pionniers de l’intelligence artificielle ?', NOW()+ interval '3 hour', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/artificial_intelligence.png');
INSERT INTO meshine_api_summary(id, question_text, created_at, url, cover_image) VALUES (7, 'Pourquoi parlons toujours de la France métropolitaine, en oubliant que la France a une frontière terrestre avec 11 pays et que le soleil ne se couche jamais sur ses départements ?', NOW()+ interval '4 hour', 'blog.meshine.me', 'http://localhost:8080/media/cover_image/france_metropole.png');

INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('image5.png', 1, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('image_animaux.png', 1, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('myvideo.mp4', 3, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('Sri Lanka : des habitans aident des baleines échouées', 2, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('logo5.png', 1, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées', 2, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées', 2, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('carre', 4, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('diagram', 6, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('table', 5, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées', 2, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées', 2, 1);
INSERT INTO meshine_api_object(location, object_type_id, summary_id) VALUES ('Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées', 2, 1);

INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 1, 1);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (2.1, 1, 2);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (2.3, 1, 3);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 1, 4);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (5.1, 2, 5);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.5, 2, 6);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.4, 1, 7);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 4, 8);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 3, 9);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.9, 3, 10);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 1, 11);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (1.1, 1, 12);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 4, 13);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (1.0, 1, 2);
INSERT INTO meshine_api_animation(duration, animation_type_id, object_id) VALUES (0.1, 1, 8);

-- meshine_api_userprofilesummary && meshine_api_summary created_at should be the same
-- don't forget to add lastModified
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 1, 1);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 2, 1);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (FALSE, 2, 2);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 3, 1);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 4, 1);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 5, 1);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 6, 1);
INSERT INTO meshine_api_userprofilesummary(is_author, summary_id, user_profile_id) VALUES (TRUE , 7, 1);