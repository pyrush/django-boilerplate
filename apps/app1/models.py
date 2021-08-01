from django.db import models
from django.utils.translation import gettext_lazy as _
from config.models import CreationModificationDateBase


class DumyModel(CreationModificationDateBase):
    name = models.CharField(_("Name"), max_length=51)

    class Meta:
        verbose_name = "Dumy"
        verbose_name_plural = "Dumies"

    def __str__(self):
        return self.name
