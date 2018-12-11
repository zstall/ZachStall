from django.db import models
from django.utils import timezone
from django.core.urlresolvers import reverse
from embed_video.fields import EmbedVideoField


# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length = 200)
    sub_title = models.CharField(max_length = 200)
    text = models.TextField()
    blog_image = models.ImageField( upload_to="upload_images",
                                    default = "upload_images/zBlog_index_image.jpg")
    post_video = EmbedVideoField(null=True, blank = True)
    create_date = models.DateTimeField(default = timezone.now)
    published_date = models.DateTimeField(blank = True, null = True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def approve_comments(self):
        return self.comments.filter(approved_comment = True)

    def get_absolute_url(self):
        return reverse("zBLOG:post_detail", kwargs={'pk':self.pk})

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey('zBLOG.Post', related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    create_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def get_absolute_url(self):
        return reverse('zBLOG:post_list')

    def __str__(self):
        return self.text
